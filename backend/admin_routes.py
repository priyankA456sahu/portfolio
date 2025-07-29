from fastapi import APIRouter, HTTPException, Depends
from motor.motor_asyncio import AsyncIOMotorDatabase
from .models import *
from .auth import hash_password, verify_password, create_access_token, verify_token
from datetime import datetime

router = APIRouter(prefix="/api/admin", tags=["admin"])

async def get_database():
    # This will be injected in server.py
    pass

# Authentication endpoints
@router.post("/login")
async def admin_login(login_data: AdminLogin, db: AsyncIOMotorDatabase = Depends(get_database)):
    """Admin login endpoint"""
    
    # For demo, create default admin if doesn't exist
    admin = await db.admins.find_one({"username": login_data.username})
    if not admin:
        if login_data.username == "admin" and login_data.password == "admin123":
            # Create default admin
            default_admin = {
                "username": "admin",
                "password_hash": hash_password("admin123"),
                "created_at": datetime.utcnow()
            }
            await db.admins.insert_one(default_admin)
            admin = default_admin
        else:
            raise HTTPException(status_code=401, detail="Invalid credentials")
    
    if not verify_password(login_data.password, admin["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    access_token = create_access_token(data={"sub": admin["username"]})
    return {"access_token": access_token, "token_type": "bearer"}

# Portfolio content endpoints
@router.get("/portfolio")
async def get_portfolio_admin(db: AsyncIOMotorDatabase = Depends(get_database), _: str = Depends(verify_token)):
    """Get portfolio data for admin"""
    portfolio = await db.portfolio.find_one()
    if not portfolio:
        # Return default data if none exists
        from ..mock import portfolioData
        return portfolioData
    
    # Remove MongoDB _id field
    portfolio.pop('_id', None)
    return portfolio

@router.put("/portfolio/hero")
async def update_hero(hero_data: UpdateHero, db: AsyncIOMotorDatabase = Depends(get_database), _: str = Depends(verify_token)):
    """Update hero section"""
    update_data = {k: v for k, v in hero_data.dict().items() if v is not None}
    update_data["updated_at"] = datetime.utcnow()
    
    await db.portfolio.update_one(
        {},
        {"$set": {"hero": update_data, "updated_at": update_data["updated_at"]}},
        upsert=True
    )
    
    return {"message": "Hero section updated successfully"}

@router.put("/portfolio/about")
async def update_about(about_data: UpdateAbout, db: AsyncIOMotorDatabase = Depends(get_database), _: str = Depends(verify_token)):
    """Update about section"""
    update_data = {k: v for k, v in about_data.dict().items() if v is not None}
    
    await db.portfolio.update_one(
        {},
        {"$set": {"about": update_data, "updated_at": datetime.utcnow()}},
        upsert=True
    )
    
    return {"message": "About section updated successfully"}

@router.put("/portfolio/contact")
async def update_contact(contact_data: UpdateContact, db: AsyncIOMotorDatabase = Depends(get_database), _: str = Depends(verify_token)):
    """Update contact section"""
    update_data = {k: v for k, v in contact_data.dict().items() if v is not None}
    
    await db.portfolio.update_one(
        {},
        {"$set": {"contact": update_data, "updated_at": datetime.utcnow()}},
        upsert=True
    )
    
    return {"message": "Contact section updated successfully"}

@router.put("/portfolio/skills")
async def update_skills(skills_data: PortfolioSkills, db: AsyncIOMotorDatabase = Depends(get_database), _: str = Depends(verify_token)):
    """Update skills section"""
    await db.portfolio.update_one(
        {},
        {"$set": {"skills": skills_data.dict(), "updated_at": datetime.utcnow()}},
        upsert=True
    )
    
    return {"message": "Skills section updated successfully"}

@router.post("/portfolio/projects")
async def add_project(project_data: Project, db: AsyncIOMotorDatabase = Depends(get_database), _: str = Depends(verify_token)):
    """Add new project"""
    portfolio = await db.portfolio.find_one()
    if not portfolio:
        portfolio = {"projects": []}
    
    projects = portfolio.get("projects", [])
    projects.append(project_data.dict())
    
    await db.portfolio.update_one(
        {},
        {"$set": {"projects": projects, "updated_at": datetime.utcnow()}},
        upsert=True
    )
    
    return {"message": "Project added successfully"}

@router.put("/portfolio/projects/{project_id}")
async def update_project(project_id: int, project_data: Project, db: AsyncIOMotorDatabase = Depends(get_database), _: str = Depends(verify_token)):
    """Update existing project"""
    portfolio = await db.portfolio.find_one()
    if not portfolio:
        raise HTTPException(status_code=404, detail="Portfolio not found")
    
    projects = portfolio.get("projects", [])
    for i, project in enumerate(projects):
        if project.get("id") == project_id:
            projects[i] = project_data.dict()
            break
    else:
        raise HTTPException(status_code=404, detail="Project not found")
    
    await db.portfolio.update_one(
        {},
        {"$set": {"projects": projects, "updated_at": datetime.utcnow()}}
    )
    
    return {"message": "Project updated successfully"}

@router.delete("/portfolio/projects/{project_id}")
async def delete_project(project_id: int, db: AsyncIOMotorDatabase = Depends(get_database), _: str = Depends(verify_token)):
    """Delete project"""
    portfolio = await db.portfolio.find_one()
    if not portfolio:
        raise HTTPException(status_code=404, detail="Portfolio not found")
    
    projects = portfolio.get("projects", [])
    projects = [p for p in projects if p.get("id") != project_id]
    
    await db.portfolio.update_one(
        {},
        {"$set": {"projects": projects, "updated_at": datetime.utcnow()}}
    )
    
    return {"message": "Project deleted successfully"}