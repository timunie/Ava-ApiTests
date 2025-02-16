---
title:FuncDataTemplate&lt;T&gt;(Func&lt;T, Boolean&gt;, Func&lt;T, Control&gt;, Boolean) Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# FuncDataTemplate&lt;T&gt;(Func&lt;T, Boolean&gt;, Func&lt;T, Control&gt;, Boolean) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Templates_FuncDataTemplate_1">FuncDataTemplate(T)</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public FuncDataTemplate(
	Func<T, bool> match,
	Func<T, Control> build,
	bool supportsRecycling = false
)
```
**VB**
``` VB
Public Sub New ( 
	match As Func(Of T, Boolean),
	build As Func(Of T, Control),
	Optional supportsRecycling As Boolean = false
)
```
**F#**
``` F#
new : 
        match : Func<'T, bool> * 
        build : Func<'T, Control> * 
        ?supportsRecycling : bool 
(* Defaults:
        let _supportsRecycling = defaultArg supportsRecycling false
*)
-> FuncDataTemplate
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Controls_Templates_FuncDataTemplate_1">T</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Controls_Templates_FuncDataTemplate_1">T</a>, <a href="T_Avalonia_Controls_Control">Control</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncDataTemplate_1">FuncDataTemplate(T) Class</a>  
<a href="Overload_Avalonia_Controls_Templates_FuncDataTemplate_1__ctor">FuncDataTemplate(T) Overload</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
