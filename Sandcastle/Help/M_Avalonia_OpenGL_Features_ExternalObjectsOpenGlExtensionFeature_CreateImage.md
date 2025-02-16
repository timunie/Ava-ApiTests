---
title:CreateImage Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CreateImage Method




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL_Features">Avalonia.OpenGL.Features</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll) Version: 11.2.4

**C#**
``` C#
public IGlExportableExternalImageTexture CreateImage(
	string type,
	PixelSize size,
	PlatformGraphicsExternalImageFormat format
)
```
**VB**
``` VB
Public Function CreateImage ( 
	type As String,
	size As PixelSize,
	format As PlatformGraphicsExternalImageFormat
) As IGlExportableExternalImageTexture
```
**F#**
``` F#
abstract CreateImage : 
        type : string * 
        size : PixelSize * 
        format : PlatformGraphicsExternalImageFormat -> IGlExportableExternalImageTexture 
override CreateImage : 
        type : string * 
        size : PixelSize * 
        format : PlatformGraphicsExternalImageFormat -> IGlExportableExternalImageTexture 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Platform_PlatformGraphicsExternalImageFormat">PlatformGraphicsExternalImageFormat</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_OpenGL_IGlExportableExternalImageTexture">IGlExportableExternalImageTexture</a>

#### Implements
<a href="M_Avalonia_OpenGL_IGlContextExternalObjectsFeature_CreateImage">IGlContextExternalObjectsFeature.CreateImage(String, PixelSize, PlatformGraphicsExternalImageFormat)</a>  


## See Also


#### Reference
<a href="T_Avalonia_OpenGL_Features_ExternalObjectsOpenGlExtensionFeature">ExternalObjectsOpenGlExtensionFeature Class</a>  
<a href="N_Avalonia_OpenGL_Features">Avalonia.OpenGL.Features Namespace</a>  
