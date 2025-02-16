---
title:FromNativeUtf8GetProcAddress Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# FromNativeUtf8GetProcAddress Method




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL">Avalonia.OpenGL</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll) Version: 11.2.4

**C#**
``` C#
public static GlInterface FromNativeUtf8GetProcAddress(
	GlVersion version,
	Func<IntPtr, IntPtr> getProcAddress
)
```
**VB**
``` VB
Public Shared Function FromNativeUtf8GetProcAddress ( 
	version As GlVersion,
	getProcAddress As Func(Of IntPtr, IntPtr)
) As GlInterface
```
**F#**
``` F#
static member FromNativeUtf8GetProcAddress : 
        version : GlVersion * 
        getProcAddress : Func<IntPtr, IntPtr> -> GlInterface 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_OpenGL_GlVersion">GlVersion</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a>, <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a>)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_OpenGL_GlInterface">GlInterface</a>

## See Also


#### Reference
<a href="T_Avalonia_OpenGL_GlInterface">GlInterface Class</a>  
<a href="N_Avalonia_OpenGL">Avalonia.OpenGL Namespace</a>  
