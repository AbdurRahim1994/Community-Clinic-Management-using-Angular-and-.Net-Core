USE [master]
GO
/****** Object:  Database [Community_Clinic_Management_System]    Script Date: 11/5/2021 1:52:44 PM ******/
CREATE DATABASE [Community_Clinic_Management_System]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Community_Clinic_Management_System', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Community_Clinic_Management_System.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Community_Clinic_Management_System_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Community_Clinic_Management_System_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Community_Clinic_Management_System] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Community_Clinic_Management_System].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Community_Clinic_Management_System] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET ARITHABORT OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET RECOVERY FULL 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET  MULTI_USER 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Community_Clinic_Management_System] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Community_Clinic_Management_System] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Community_Clinic_Management_System', N'ON'
GO
ALTER DATABASE [Community_Clinic_Management_System] SET QUERY_STORE = OFF
GO
USE [Community_Clinic_Management_System]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 11/5/2021 1:52:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 11/5/2021 1:52:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[CategoryId] [int] IDENTITY(1,1) NOT NULL,
	[CategoryName] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Designations]    Script Date: 11/5/2021 1:52:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Designations](
	[DesignationId] [int] IDENTITY(1,1) NOT NULL,
	[PositionName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Designations] PRIMARY KEY CLUSTERED 
(
	[DesignationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Doctors]    Script Date: 11/5/2021 1:52:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Doctors](
	[DoctorId] [int] IDENTITY(1,1) NOT NULL,
	[DoctorName] [nvarchar](50) NOT NULL,
	[Address] [nvarchar](50) NOT NULL,
	[Contact] [nvarchar](11) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Appointed] [date] NOT NULL,
	[DesignationId] [int] NOT NULL,
	[Degree] [nvarchar](50) NOT NULL,
	[Specialization] [nvarchar](50) NOT NULL,
	[Picture] [nvarchar](200) NULL,
 CONSTRAINT [PK_Doctors] PRIMARY KEY CLUSTERED 
(
	[DoctorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DoctorServices]    Script Date: 11/5/2021 1:52:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DoctorServices](
	[DoctorId] [int] NOT NULL,
	[ServiceId] [int] NOT NULL,
 CONSTRAINT [PK_DoctorServices] PRIMARY KEY CLUSTERED 
(
	[DoctorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FollowUps]    Script Date: 11/5/2021 1:52:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FollowUps](
	[FollowUpId] [int] IDENTITY(1,1) NOT NULL,
	[FollowUpDate] [date] NOT NULL,
	[DoctorName] [nvarchar](max) NULL,
	[PhysicalCheckUpId] [int] NOT NULL,
	[TestResult] [nvarchar](200) NOT NULL,
	[Observation] [nvarchar](max) NULL,
	[Medicine] [nvarchar](200) NOT NULL,
	[Advice] [nvarchar](150) NOT NULL,
	[DoctorId] [int] NULL,
 CONSTRAINT [PK_FollowUps] PRIMARY KEY CLUSTERED 
(
	[FollowUpId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Medicines]    Script Date: 11/5/2021 1:52:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Medicines](
	[MedicineId] [int] IDENTITY(1,1) NOT NULL,
	[MedicineName] [nvarchar](50) NOT NULL,
	[WeightContaints] [nvarchar](50) NOT NULL,
	[MG_ML] [nvarchar](50) NOT NULL,
	[Quantity] [int] NOT NULL,
	[Available] [nvarchar](20) NOT NULL,
 CONSTRAINT [PK_Medicines] PRIMARY KEY CLUSTERED 
(
	[MedicineId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MedicineStocks]    Script Date: 11/5/2021 1:52:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MedicineStocks](
	[MedicineStockId] [int] IDENTITY(1,1) NOT NULL,
	[MedicineName] [nvarchar](50) NOT NULL,
	[WeightContaints] [nvarchar](50) NOT NULL,
	[MG_ML] [nvarchar](50) NOT NULL,
	[Quantity] [int] NOT NULL,
	[Available] [nvarchar](20) NOT NULL,
	[CategoryId] [int] NOT NULL,
 CONSTRAINT [PK_MedicineStocks] PRIMARY KEY CLUSTERED 
(
	[MedicineStockId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Patients]    Script Date: 11/5/2021 1:52:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Patients](
	[PatientId] [int] IDENTITY(1,1) NOT NULL,
	[PatientName] [nvarchar](50) NOT NULL,
	[Address] [nvarchar](50) NOT NULL,
	[Age] [int] NOT NULL,
	[CheckUpDate] [date] NOT NULL,
	[Observation] [nvarchar](50) NOT NULL,
	[ServiceId] [int] NOT NULL,
	[DoctorId] [int] NOT NULL,
 CONSTRAINT [PK_Patients] PRIMARY KEY CLUSTERED 
(
	[PatientId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PhysicalCheckUps]    Script Date: 11/5/2021 1:52:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PhysicalCheckUps](
	[PhysicalCheckUpId] [int] IDENTITY(1,1) NOT NULL,
	[PatientName] [nvarchar](max) NOT NULL,
	[PatientAddress] [nvarchar](max) NOT NULL,
	[CheckUpDate] [datetime2](7) NOT NULL,
	[DoctorId] [int] NOT NULL,
	[ServiceId] [int] NOT NULL,
	[Pressure] [nvarchar](max) NULL,
	[HeartBeat] [nvarchar](max) NULL,
	[Weight] [nvarchar](max) NULL,
	[Observation] [nvarchar](max) NULL,
	[TestGiven] [nvarchar](max) NULL,
	[Medicine] [nvarchar](max) NULL,
	[Advice] [nvarchar](max) NULL,
 CONSTRAINT [PK_PhysicalCheckUps] PRIMARY KEY CLUSTERED 
(
	[PhysicalCheckUpId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Services]    Script Date: 11/5/2021 1:52:45 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Services](
	[ServiceId] [int] IDENTITY(1,1) NOT NULL,
	[ServiceName] [nvarchar](50) NOT NULL,
	[Symptoms] [nvarchar](max) NULL,
	[TreatmentProcedure] [nvarchar](100) NOT NULL,
	[PreferedMedicines] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Services] PRIMARY KEY CLUSTERED 
(
	[ServiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Index [IX_Doctors_DesignationId]    Script Date: 11/5/2021 1:52:45 PM ******/
CREATE NONCLUSTERED INDEX [IX_Doctors_DesignationId] ON [dbo].[Doctors]
(
	[DesignationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_DoctorServices_ServiceId]    Script Date: 11/5/2021 1:52:45 PM ******/
CREATE NONCLUSTERED INDEX [IX_DoctorServices_ServiceId] ON [dbo].[DoctorServices]
(
	[ServiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_FollowUps_DoctorId]    Script Date: 11/5/2021 1:52:45 PM ******/
CREATE NONCLUSTERED INDEX [IX_FollowUps_DoctorId] ON [dbo].[FollowUps]
(
	[DoctorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_FollowUps_PhysicalCheckUpId]    Script Date: 11/5/2021 1:52:45 PM ******/
CREATE NONCLUSTERED INDEX [IX_FollowUps_PhysicalCheckUpId] ON [dbo].[FollowUps]
(
	[PhysicalCheckUpId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_MedicineStocks_CategoryId]    Script Date: 11/5/2021 1:52:45 PM ******/
CREATE NONCLUSTERED INDEX [IX_MedicineStocks_CategoryId] ON [dbo].[MedicineStocks]
(
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Patients_DoctorId]    Script Date: 11/5/2021 1:52:45 PM ******/
CREATE NONCLUSTERED INDEX [IX_Patients_DoctorId] ON [dbo].[Patients]
(
	[DoctorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Patients_ServiceId]    Script Date: 11/5/2021 1:52:45 PM ******/
CREATE NONCLUSTERED INDEX [IX_Patients_ServiceId] ON [dbo].[Patients]
(
	[ServiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_PhysicalCheckUps_DoctorId]    Script Date: 11/5/2021 1:52:45 PM ******/
CREATE NONCLUSTERED INDEX [IX_PhysicalCheckUps_DoctorId] ON [dbo].[PhysicalCheckUps]
(
	[DoctorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_PhysicalCheckUps_ServiceId]    Script Date: 11/5/2021 1:52:45 PM ******/
CREATE NONCLUSTERED INDEX [IX_PhysicalCheckUps_ServiceId] ON [dbo].[PhysicalCheckUps]
(
	[ServiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Doctors]  WITH CHECK ADD  CONSTRAINT [FK_Doctors_Designations_DesignationId] FOREIGN KEY([DesignationId])
REFERENCES [dbo].[Designations] ([DesignationId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Doctors] CHECK CONSTRAINT [FK_Doctors_Designations_DesignationId]
GO
ALTER TABLE [dbo].[DoctorServices]  WITH CHECK ADD  CONSTRAINT [FK_DoctorServices_Doctors_DoctorId] FOREIGN KEY([DoctorId])
REFERENCES [dbo].[Doctors] ([DoctorId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[DoctorServices] CHECK CONSTRAINT [FK_DoctorServices_Doctors_DoctorId]
GO
ALTER TABLE [dbo].[DoctorServices]  WITH CHECK ADD  CONSTRAINT [FK_DoctorServices_Services_ServiceId] FOREIGN KEY([ServiceId])
REFERENCES [dbo].[Services] ([ServiceId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[DoctorServices] CHECK CONSTRAINT [FK_DoctorServices_Services_ServiceId]
GO
ALTER TABLE [dbo].[FollowUps]  WITH CHECK ADD  CONSTRAINT [FK_FollowUps_Doctors_DoctorId] FOREIGN KEY([DoctorId])
REFERENCES [dbo].[Doctors] ([DoctorId])
GO
ALTER TABLE [dbo].[FollowUps] CHECK CONSTRAINT [FK_FollowUps_Doctors_DoctorId]
GO
ALTER TABLE [dbo].[FollowUps]  WITH CHECK ADD  CONSTRAINT [FK_FollowUps_PhysicalCheckUps_PhysicalCheckUpId] FOREIGN KEY([PhysicalCheckUpId])
REFERENCES [dbo].[PhysicalCheckUps] ([PhysicalCheckUpId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[FollowUps] CHECK CONSTRAINT [FK_FollowUps_PhysicalCheckUps_PhysicalCheckUpId]
GO
ALTER TABLE [dbo].[MedicineStocks]  WITH CHECK ADD  CONSTRAINT [FK_MedicineStocks_Categories_CategoryId] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([CategoryId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[MedicineStocks] CHECK CONSTRAINT [FK_MedicineStocks_Categories_CategoryId]
GO
ALTER TABLE [dbo].[Patients]  WITH CHECK ADD  CONSTRAINT [FK_Patients_Doctors_DoctorId] FOREIGN KEY([DoctorId])
REFERENCES [dbo].[Doctors] ([DoctorId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Patients] CHECK CONSTRAINT [FK_Patients_Doctors_DoctorId]
GO
ALTER TABLE [dbo].[Patients]  WITH CHECK ADD  CONSTRAINT [FK_Patients_Services_ServiceId] FOREIGN KEY([ServiceId])
REFERENCES [dbo].[Services] ([ServiceId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Patients] CHECK CONSTRAINT [FK_Patients_Services_ServiceId]
GO
ALTER TABLE [dbo].[PhysicalCheckUps]  WITH CHECK ADD  CONSTRAINT [FK_PhysicalCheckUps_Doctors_DoctorId] FOREIGN KEY([DoctorId])
REFERENCES [dbo].[Doctors] ([DoctorId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PhysicalCheckUps] CHECK CONSTRAINT [FK_PhysicalCheckUps_Doctors_DoctorId]
GO
ALTER TABLE [dbo].[PhysicalCheckUps]  WITH CHECK ADD  CONSTRAINT [FK_PhysicalCheckUps_Services_ServiceId] FOREIGN KEY([ServiceId])
REFERENCES [dbo].[Services] ([ServiceId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PhysicalCheckUps] CHECK CONSTRAINT [FK_PhysicalCheckUps_Services_ServiceId]
GO
USE [master]
GO
ALTER DATABASE [Community_Clinic_Management_System] SET  READ_WRITE 
GO
