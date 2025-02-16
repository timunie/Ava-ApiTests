---
title:Shutdown Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Shutdown Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public void Shutdown(
	int exitCode = 0
)
```
**VB**
``` VB
Public Sub Shutdown ( 
	Optional exitCode As Integer = 0
)
```
**F#**
``` F#
abstract Shutdown : 
        ?exitCode : int 
(* Defaults:
        let _exitCode = defaultArg exitCode 0
*)
-> unit 
override Shutdown : 
        ?exitCode : int 
(* Defaults:
        let _exitCode = defaultArg exitCode 0
*)
-> unit 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd> </dd></dl>

#### Implements
<a href="M_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Shutdown">IControlledApplicationLifetime.Shutdown(Int32)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime">ClassicDesktopStyleApplicationLifetime Class</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
