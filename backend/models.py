from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

# Authentication Models
class AdminLogin(BaseModel):
    username: str
    password: str

class AdminUser(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    username: str
    password_hash: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

# Portfolio Content Models
class PortfolioHero(BaseModel):
    name: str
    headline: str
    profile_image: str
    highlights: List[str]

class PortfolioAbout(BaseModel):
    bio: str
    impact: str

class SkillCategory(BaseModel):
    title: str
    items: List[str]

class PortfolioSkills(BaseModel):
    current: SkillCategory
    learning: SkillCategory
    tools: SkillCategory
    programming: SkillCategory
    database: SkillCategory
    cloud: SkillCategory
    soft: SkillCategory

class Project(BaseModel):
    id: int
    title: str
    status: str
    description: str
    is_placeholder: bool = True
    image_url: Optional[str] = None
    demo_url: Optional[str] = None
    github_url: Optional[str] = None

class PortfolioEducation(BaseModel):
    degree: str
    institution: str
    year: str

class PortfolioExperience(BaseModel):
    message: str

class PortfolioContact(BaseModel):
    email: str
    linkedin: str
    call_to_action: str

class LearningPhase(BaseModel):
    phase: str
    skills: List[str]
    status: str

class Experiment(BaseModel):
    title: str
    description: str
    status: str

class PortfolioData(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    hero: PortfolioHero
    about: PortfolioAbout
    skills: PortfolioSkills
    projects: List[Project]
    education: PortfolioEducation
    experience: PortfolioExperience
    contact: PortfolioContact
    learning_journey: List[LearningPhase]
    experiments: List[Experiment]
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# Update Models
class UpdateHero(BaseModel):
    name: Optional[str] = None
    headline: Optional[str] = None
    profile_image: Optional[str] = None
    highlights: Optional[List[str]] = None

class UpdateAbout(BaseModel):
    bio: Optional[str] = None
    impact: Optional[str] = None

class UpdateContact(BaseModel):
    email: Optional[str] = None
    linkedin: Optional[str] = None
    call_to_action: Optional[str] = None