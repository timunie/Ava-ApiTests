---
title:ChooseConfig Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ChooseConfig Method




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll) Version: 11.2.4

**C#**
``` C#
public bool ChooseConfig(
	IntPtr display,
	int[] attribs,
	out IntPtr surfaceConfig,
	int numConfigs,
	out int choosenConfig
)
```
**VB**
``` VB
Public Function ChooseConfig ( 
	display As IntPtr,
	attribs As Integer(),
	<OutAttribute> ByRef surfaceConfig As IntPtr,
	numConfigs As Integer,
	<OutAttribute> ByRef choosenConfig As Integer
) As Boolean
```
**F#**
``` F#
member ChooseConfig : 
        display : IntPtr * 
        attribs : int[] * 
        surfaceConfig : IntPtr byref * 
        numConfigs : int * 
        choosenConfig : int byref -> bool 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>[]</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_OpenGL_Egl_EglInterface">EglInterface Class</a>  
<a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl Namespace</a>  
