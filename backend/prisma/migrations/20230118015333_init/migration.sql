/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropTable
DROP TABLE [dbo].[User];

-- CreateTable
CREATE TABLE [dbo].[Locations] (
    [locationId] INT NOT NULL IDENTITY(1,1),
    [code] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    [isActive] BIT NOT NULL CONSTRAINT [Locations_isActive_df] DEFAULT 1,
    [createdAt] DATETIMEOFFSET NOT NULL CONSTRAINT [Locations_createdAt_df] DEFAULT getutcdate(),
    [updatedAt] DATETIMEOFFSET NOT NULL CONSTRAINT [Locations_updatedAt_df] DEFAULT getutcdate(),
    CONSTRAINT [Locations_pkey] PRIMARY KEY CLUSTERED ([locationId]),
    CONSTRAINT [Locations_code_key] UNIQUE NONCLUSTERED ([code])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
