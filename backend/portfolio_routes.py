from fastapi import APIRouter, Depends
from motor.motor_asyncio import AsyncIOMotorDatabase

router = APIRouter(prefix="/api/portfolio", tags=["portfolio"])

async def get_database():
    # This will be injected in server.py
    pass

@router.get("/")
async def get_portfolio(db: AsyncIOMotorDatabase = Depends(get_database)):
    """Get public portfolio data"""
    portfolio = await db.portfolio.find_one()
    
    if not portfolio:
        # Return mock data if no portfolio exists yet
        from ..mock import portfolioData
        return portfolioData
    
    # Remove MongoDB _id field
    portfolio.pop('_id', None)
    return portfolio

@router.get("/hero")
async def get_hero(db: AsyncIOMotorDatabase = Depends(get_database)):
    """Get hero section data"""
    portfolio = await db.portfolio.find_one()
    if portfolio and "hero" in portfolio:
        return portfolio["hero"]
    
    # Return mock data
    from ..mock import portfolioData
    return portfolioData["hero"]

@router.get("/about")
async def get_about(db: AsyncIOMotorDatabase = Depends(get_database)):
    """Get about section data"""
    portfolio = await db.portfolio.find_one()
    if portfolio and "about" in portfolio:
        return portfolio["about"]
    
    # Return mock data
    from ..mock import portfolioData
    return portfolioData["about"]

@router.get("/skills")
async def get_skills(db: AsyncIOMotorDatabase = Depends(get_database)):
    """Get skills section data"""
    portfolio = await db.portfolio.find_one()
    if portfolio and "skills" in portfolio:
        return portfolio["skills"]
    
    # Return mock data
    from ..mock import portfolioData
    return portfolioData["skills"]

@router.get("/projects")
async def get_projects(db: AsyncIOMotorDatabase = Depends(get_database)):
    """Get projects data"""
    portfolio = await db.portfolio.find_one()
    if portfolio and "projects" in portfolio:
        return portfolio["projects"]
    
    # Return mock data
    from ..mock import portfolioData
    return portfolioData["projects"]

@router.get("/contact")
async def get_contact(db: AsyncIOMotorDatabase = Depends(get_database)):
    """Get contact data"""
    portfolio = await db.portfolio.find_one()
    if portfolio and "contact" in portfolio:
        return portfolio["contact"]
    
    # Return mock data
    from ..mock import portfolioData
    return portfolioData["contact"]