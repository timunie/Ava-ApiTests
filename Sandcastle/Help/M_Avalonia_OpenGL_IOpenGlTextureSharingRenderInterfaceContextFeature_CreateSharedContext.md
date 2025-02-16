---
title:CreateSharedContext Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CreateSharedContext Method




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL">Avalonia.OpenGL</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll) Version: 11.2.4

**C#**
``` C#
IGlContext? CreateSharedContext(
	IEnumerable<GlVersion>? preferredVersions = null
)
```
**VB**
``` VB
Function CreateSharedContext ( 
	Optional preferredVersions As IEnumerable(Of GlVersion) = Nothing
) As IGlContext
```
**F#**
``` F#
abstract CreateSharedContext : 
        ?preferredVersions : IEnumerable<GlVersion> 
(* Defaults:
        let _preferredVersions = defaultArg preferredVersions null
*)
-> IGlContext 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_OpenGL_GlVersion">GlVersion</a>)  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_OpenGL_IGlContext">IGlContext</a>

## See Also


#### Reference
<a href="T_Avalonia_OpenGL_IOpenGlTextureSharingRenderInterfaceContextFeature">IOpenGlTextureSharingRenderInterfaceContextFeature Interface</a>  
<a href="N_Avalonia_OpenGL">Avalonia.OpenGL Namespace</a>  
