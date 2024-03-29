USE [Shop]
GO
/****** Object:  Table [dbo].[account]    Script Date: 3/28/2023 2:55:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[account](
	[id] [int] NOT NULL,
	[email] [varchar](255) NULL,
	[first_name] [varchar](255) NULL,
	[last_name] [varchar](255) NULL,
	[password] [varchar](255) NULL,
	[role] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[img]    Script Date: 3/28/2023 2:55:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[img](
	[id] [int] NOT NULL,
	[img] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC,
	[img] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[product]    Script Date: 3/28/2023 2:55:46 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product](
	[id] [int] NOT NULL,
	[best_seller] [varchar](50) NULL,
	[camera] [varbinary](255) NULL,
	[chip] [varchar](50) NULL,
	[name] [varchar](100) NULL,
	[price] [decimal](10, 2) NULL,
	[ram] [int] NULL,
	[rom] [int] NULL,
	[screen] [decimal](10, 2) NULL,
	[slug] [varchar](50) NULL,
	[specialfeature] [varbinary](255) NULL,
	[type] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[account] ([id], [email], [first_name], [last_name], [password], [role]) VALUES (302, N'admin@gmail.com', N'Admin', N'Root', N'$2a$10$An9gBCOEGuryC7kKKh5EBe0oRPrrIvzZdEoFJebjzCI2qEI9NHSum', N'ADMIN')
INSERT [dbo].[account] ([id], [email], [first_name], [last_name], [password], [role]) VALUES (702, N'phong@gmail.com', N'Le', N'Quoc Phong', N'$2a$10$RcbVcC9OnuLrBV7G12ARX.p8I/eylPbJ9ysLCKCMmKmBFfzn6X.Je', N'USER')
INSERT [dbo].[account] ([id], [email], [first_name], [last_name], [password], [role]) VALUES (802, N'', N'', N'', N'$2a$10$Jyjo36d9Pq3uA5muETX5aOXA.I4eB1UNKQKQvt/T45XeuIwxZzhw2', N'USER')
INSERT [dbo].[account] ([id], [email], [first_name], [last_name], [password], [role]) VALUES (803, N'thuan@gmail.com', N'Nguyen', N'Van Thuan', N'$2a$10$tJcrh2FrUuoQdXASyIn3ceoFa/qBinif.h0bXLHpzSjmBJwuYif5W', N'USER')
INSERT [dbo].[account] ([id], [email], [first_name], [last_name], [password], [role]) VALUES (804, N'tai@gmail.com', N'Nguyen', N'Duc Tai', N'$2a$10$SLgxsWZWbasZiTA9V0lCG.eSO5UU38EBrNwxPYOiqsCCU9xDt0z.C', N'USER')
GO
INSERT [dbo].[img] ([id], [img]) VALUES (1, N'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107846051034219_iphone-13-pro-max-dd.jpg')
INSERT [dbo].[img] ([id], [img]) VALUES (52, N'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/2/638109356938776451_samsung-galaxy-s23-ultra-xanh-dd-bh.jpg')
INSERT [dbo].[img] ([id], [img]) VALUES (102, N'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/11/10/638036697912302156_vivo-v25-pro-5g-xanh-dd.jpg')
INSERT [dbo].[img] ([id], [img]) VALUES (152, N'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/2/638109492836018083_oppo-reno8-t-5g-dd-moi.jpg')
INSERT [dbo].[img] ([id], [img]) VALUES (202, N'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/20/638125137139946146_xiaomi-13-dd.jpg')
INSERT [dbo].[img] ([id], [img]) VALUES (716, N'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107858631679725_iphone-14-pro-max-dd-1.jpg')
GO
INSERT [dbo].[product] ([id], [best_seller], [camera], [chip], [name], [price], [ram], [rom], [screen], [slug], [specialfeature], [type]) VALUES (1, N'true', NULL, N'Apple A15 Bionic', N'iPhone 13 Pro Max 256GB', CAST(28495000.00 AS Decimal(10, 2)), 8, 256, CAST(6.70 AS Decimal(10, 2)), N'Apple', NULL, N'Ðien thoai')
INSERT [dbo].[product] ([id], [best_seller], [camera], [chip], [name], [price], [ram], [rom], [screen], [slug], [specialfeature], [type]) VALUES (52, N'true', NULL, N'Snapdragon 8 Gen 2', N'Samsung Galaxy S23 Ultra 5G 256GB', CAST(26990000.00 AS Decimal(10, 2)), 8, 256, CAST(6.40 AS Decimal(10, 2)), N'Samsung', NULL, N'Ðien thoai')
INSERT [dbo].[product] ([id], [best_seller], [camera], [chip], [name], [price], [ram], [rom], [screen], [slug], [specialfeature], [type]) VALUES (102, N'true', NULL, N'MediaTek Dimensity 1300 5G', N'Vivo V25 Pro 5G 8GB-128GB', CAST(11990000.00 AS Decimal(10, 2)), 8, 128, CAST(6.50 AS Decimal(10, 2)), N'vivo', NULL, N'dienthoai')
INSERT [dbo].[product] ([id], [best_seller], [camera], [chip], [name], [price], [ram], [rom], [screen], [slug], [specialfeature], [type]) VALUES (152, N'true', NULL, N'Snapdragon 695 5G', N'OPPO Reno8 T 5G 128GB', CAST(9990000.00 AS Decimal(10, 2)), 8, 128, CAST(6.70 AS Decimal(10, 2)), N'oppo', NULL, N'dienthoai')
INSERT [dbo].[product] ([id], [best_seller], [camera], [chip], [name], [price], [ram], [rom], [screen], [slug], [specialfeature], [type]) VALUES (202, N'false', NULL, N'Snapdragon 8 Gen 2', N'Xiaomi 13 8GB-256GB', CAST(22990000.00 AS Decimal(10, 2)), 8, 256, CAST(6.40 AS Decimal(10, 2)), N'xiaomi', NULL, N'dienthoai')
INSERT [dbo].[product] ([id], [best_seller], [camera], [chip], [name], [price], [ram], [rom], [screen], [slug], [specialfeature], [type]) VALUES (716, N'true', NULL, N'Apple A16 Bionic', N'iPhone 14 Pro Max 256GB', CAST(30999999.00 AS Decimal(10, 2)), 8, 256, CAST(6.70 AS Decimal(10, 2)), N'Apple', NULL, N'Ðien thoai')
GO
ALTER TABLE [dbo].[img]  WITH CHECK ADD  CONSTRAINT [FK6p19tmxqr551jp2kcei8jy9sf] FOREIGN KEY([id])
REFERENCES [dbo].[product] ([id])
GO
ALTER TABLE [dbo].[img] CHECK CONSTRAINT [FK6p19tmxqr551jp2kcei8jy9sf]
GO
