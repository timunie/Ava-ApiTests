---
title:ImportImage Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ImportImage Method




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL_Features">Avalonia.OpenGL.Features</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll) Version: 11.2.4

**C#**
``` C#
public IGlExternalImageTexture ImportImage(
	IPlatformHandle handle,
	PlatformGraphicsExternalImageProperties properties
)
```
**VB**
``` VB
Public Function ImportImage ( 
	handle As IPlatformHandle,
	properties As PlatformGraphicsExternalImageProperties
) As IGlExternalImageTexture
```
**F#**
``` F#
abstract ImportImage : 
        handle : IPlatformHandle * 
        properties : PlatformGraphicsExternalImageProperties -> IGlExternalImageTexture 
override ImportImage : 
        handle : IPlatformHandle * 
        properties : PlatformGraphicsExternalImageProperties -> IGlExternalImageTexture 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IPlatformHandle">IPlatformHandle</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Platform_PlatformGraphicsExternalImageProperties">PlatformGraphicsExternalImageProperties</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_OpenGL_IGlExternalImageTexture">IGlExternalImageTexture</a>

#### Implements
<a href="M_Avalonia_OpenGL_IGlContextExternalObjectsFeature_ImportImage">IGlContextExternalObjectsFeature.ImportImage(IPlatformHandle, PlatformGraphicsExternalImageProperties)</a>  


## See Also


#### Reference
<a href="T_Avalonia_OpenGL_Features_ExternalObjectsOpenGlExtensionFeature">ExternalObjectsOpenGlExtensionFeature Class</a>  
<a href="N_Avalonia_OpenGL_Features">Avalonia.OpenGL.Features Namespace</a>  
