
/****** Object:  Database [QuanLyPhongKham_HuyenNEU]    Script Date: 10/04/2023 8:40:00 AM ******/
CREATE DATABASE [QuanLyPhongKham_HuyenNEU]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'QuanLyPhongKham_HuyenNEU', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER01\MSSQL\DATA\QuanLyPhongKham_HuyenNEU.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'QuanLyPhongKham_HuyenNEU_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER01\MSSQL\DATA\QuanLyPhongKham_HuyenNEU_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [QuanLyPhongKham_HuyenNEU].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET ARITHABORT OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET  DISABLE_BROKER 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET  MULTI_USER 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET DB_CHAINING OFF 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET QUERY_STORE = OFF
GO
USE [QuanLyPhongKham_HuyenNEU]
GO
/****** Object:  Table [dbo].[Account]    Script Date: 10/04/2023 8:40:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Account](
	[email] [varchar](50) NOT NULL,
	[password] [varchar](50) NULL,
	[role] [varchar](50) NULL,
 CONSTRAINT [PK_Account] PRIMARY KEY CLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Booking]    Script Date: 10/04/2023 8:40:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Booking](
	[bookingID] [int] IDENTITY(1,1) NOT NULL,
	[bookingDate] [date] NULL,
	[timeID] [int] NULL,
	[doctorID] [int] NULL,
	[statusID] [int] NULL,
	[userID] [int] NULL,
	[content] [nvarchar](50) NOT NULL,
	[bookingOrder] [int] NULL,
	[status] [nvarchar](50) NULL,
	[time] [nvarchar](50) NULL,
 CONSTRAINT [PK_Booking_1] PRIMARY KEY CLUSTERED 
(
	[bookingID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Doctor]    Script Date: 10/04/2023 8:40:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Doctor](
	[doctorID] [int] IDENTITY(1,1) NOT NULL,
	[address] [nvarchar](50) NULL,
	[fullName] [nvarchar](50) NULL,
	[degree] [nvarchar](50) NULL,
	[phoneNumber] [varchar](50) NULL,
	[dateBirth] [date] NULL,
	[avatar] [nvarchar](50) NULL,
 CONSTRAINT [PK_Doctor] PRIMARY KEY CLUSTERED 
(
	[doctorID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Manager]    Script Date: 10/04/2023 8:40:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Manager](
	[managerID] [int] IDENTITY(1,1) NOT NULL,
	[fullName] [nvarchar](50) NULL,
	[email] [varchar](50) NULL,
	[avatar] [nvarchar](50) NULL,
 CONSTRAINT [PK_Manager] PRIMARY KEY CLUSTERED 
(
	[managerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Post]    Script Date: 10/04/2023 8:40:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Post](
	[postID] [varchar](10) NOT NULL,
	[postContent] [nvarchar](1000) NULL,
	[authorID] [int] NULL,
	[createdDate] [date] NULL,
	[postImages] [nvarchar](100) NULL,
	[postType] [varchar](10) NULL,
 CONSTRAINT [PK_Post] PRIMARY KEY CLUSTERED 
(
	[postID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Schedule]    Script Date: 10/04/2023 8:40:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Schedule](
	[scheduleID] [int] IDENTITY(1,1) NOT NULL,
	[currentNumber] [int] NULL,
	[maxNumber] [int] NULL,
	[scheduleDate] [date] NOT NULL,
	[timeID] [int] NOT NULL,
	[doctorID] [int] NOT NULL,
 CONSTRAINT [PK_Schedule_1] PRIMARY KEY CLUSTERED 
(
	[scheduleID] ASC,
	[scheduleDate] ASC,
	[timeID] ASC,
	[doctorID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Schedule_Doctor]    Script Date: 10/04/2023 8:40:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Schedule_Doctor](
	[scheduleID] [varchar](50) NOT NULL,
	[doctorID] [int] NOT NULL,
	[timeID] [int] NOT NULL,
 CONSTRAINT [PK_Schedule_Doctor] PRIMARY KEY CLUSTERED 
(
	[scheduleID] ASC,
	[doctorID] ASC,
	[timeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Status]    Script Date: 10/04/2023 8:40:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Status](
	[statusID] [int] IDENTITY(1,1) NOT NULL,
	[value] [nvarchar](50) NULL,
 CONSTRAINT [PK_Status] PRIMARY KEY CLUSTERED 
(
	[statusID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Time]    Script Date: 10/04/2023 8:40:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Time](
	[timeID] [int] IDENTITY(1,1) NOT NULL,
	[value] [nvarchar](50) NULL,
 CONSTRAINT [PK_Time] PRIMARY KEY CLUSTERED 
(
	[timeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserInfor]    Script Date: 10/04/2023 8:40:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserInfor](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[fullName] [nvarchar](50) NOT NULL,
	[address] [nvarchar](50) NOT NULL,
	[phoneNumber] [varchar](50) NOT NULL,
	[dateBirth] [date] NOT NULL,
	[email] [varchar](50) NOT NULL,
	[avatar] [nvarchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[UserInfor] ON 

INSERT [dbo].[UserInfor] ([id], [fullName], [address], [phoneNumber], [dateBirth], [email], [avatar]) VALUES (4, N'Nguyễn Tiến Dũng', N'124 Thái Thịnh', N'0912345678', CAST(N'1990-01-01' AS Date), N'DungHA@email.com', N'default_avatar.jpg')
INSERT [dbo].[UserInfor] ([id], [fullName], [address], [phoneNumber], [dateBirth], [email], [avatar]) VALUES (5, N'Dương Văn Thịnh', N'15 Tôn Thất Tùng', N'0912345678', CAST(N'1990-01-01' AS Date), N'ThinhDV@email.com', N'default_avatar.jpg')
INSERT [dbo].[UserInfor] ([id], [fullName], [address], [phoneNumber], [dateBirth], [email], [avatar]) VALUES (6, N'Mai Việt Tùng', N'1074 Đường Láng', N'0912345678', CAST(N'1990-01-01' AS Date), N'TungMV@email.com', N'default_avatar.jpg')
SET IDENTITY_INSERT [dbo].[UserInfor] OFF
GO
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [FK_Booking_Doctor] FOREIGN KEY([doctorID])
REFERENCES [dbo].[Doctor] ([doctorID])
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [FK_Booking_Doctor]
GO
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [FK_Booking_Status] FOREIGN KEY([statusID])
REFERENCES [dbo].[Status] ([statusID])
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [FK_Booking_Status]
GO
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [FK_Booking_Time] FOREIGN KEY([timeID])
REFERENCES [dbo].[Time] ([timeID])
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [FK_Booking_Time]
GO
ALTER TABLE [dbo].[Manager]  WITH CHECK ADD  CONSTRAINT [FK_Manager_Account] FOREIGN KEY([email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Manager] CHECK CONSTRAINT [FK_Manager_Account]
GO
ALTER TABLE [dbo].[Post]  WITH CHECK ADD  CONSTRAINT [FK_Post_Manager] FOREIGN KEY([authorID])
REFERENCES [dbo].[Manager] ([managerID])
GO
ALTER TABLE [dbo].[Post] CHECK CONSTRAINT [FK_Post_Manager]
GO
ALTER TABLE [dbo].[Schedule]  WITH CHECK ADD  CONSTRAINT [FK_Schedule_Doctor] FOREIGN KEY([doctorID])
REFERENCES [dbo].[Doctor] ([doctorID])
GO
ALTER TABLE [dbo].[Schedule] CHECK CONSTRAINT [FK_Schedule_Doctor]
GO
ALTER TABLE [dbo].[Schedule]  WITH CHECK ADD  CONSTRAINT [FK_Schedule_Time] FOREIGN KEY([timeID])
REFERENCES [dbo].[Time] ([timeID])
GO
ALTER TABLE [dbo].[Schedule] CHECK CONSTRAINT [FK_Schedule_Time]
GO
ALTER TABLE [dbo].[Schedule_Doctor]  WITH CHECK ADD  CONSTRAINT [FK_Schedule_Doctor_Doctor] FOREIGN KEY([doctorID])
REFERENCES [dbo].[Doctor] ([doctorID])
GO
ALTER TABLE [dbo].[Schedule_Doctor] CHECK CONSTRAINT [FK_Schedule_Doctor_Doctor]
GO
ALTER TABLE [dbo].[Schedule_Doctor]  WITH CHECK ADD  CONSTRAINT [FK_Schedule_Doctor_Time] FOREIGN KEY([timeID])
REFERENCES [dbo].[Time] ([timeID])
GO
ALTER TABLE [dbo].[Schedule_Doctor] CHECK CONSTRAINT [FK_Schedule_Doctor_Time]
GO
/****** Object:  StoredProcedure [dbo].[addUser]    Script Date: 10/04/2023 8:40:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[addUser] (@fullName nvarchar(50),@address nvarchar(50), @phoneNumber varchar(50), @dateBirth date,@email varchar(50), @avatar nvarchar(50))
as 
begin 
	insert into UserInfor(fullName,address,phoneNumber,dateBirth,email,avatar)
	values (@fullName,@address,@phoneNumber, @dateBirth,@email, @avatar )
end
GO
USE [master]
GO
ALTER DATABASE [QuanLyPhongKham_HuyenNEU] SET  READ_WRITE 
GO
