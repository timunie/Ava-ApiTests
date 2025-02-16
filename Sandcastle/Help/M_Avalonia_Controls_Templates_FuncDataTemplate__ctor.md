---
title:FuncDataTemplate(Func&lt;Object, Boolean&gt;, Func&lt;Object, INameScope, Control&gt;, Boolean) Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# FuncDataTemplate(Func&lt;Object, Boolean&gt;, Func&lt;Object, INameScope, Control&gt;, Boolean) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Templates_FuncDataTemplate">FuncDataTemplate</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public FuncDataTemplate(
	Func<Object?, bool> match,
	Func<Object?, INameScope, Control?> build,
	bool supportsRecycling = false
)
```
**VB**
``` VB
Public Sub New ( 
	match As Func(Of Object, Boolean),
	build As Func(Of Object, INameScope, Control),
	Optional supportsRecycling As Boolean = false
)
```
**F#**
``` F#
new : 
        match : Func<Object, bool> * 
        build : Func<Object, INameScope, Control> * 
        ?supportsRecycling : bool 
(* Defaults:
        let _supportsRecycling = defaultArg supportsRecycling false
*)
-> FuncDataTemplate
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="T_Avalonia_Controls_INameScope">INameScope</a>, <a href="T_Avalonia_Controls_Control">Control</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncDataTemplate">FuncDataTemplate Class</a>  
<a href="Overload_Avalonia_Controls_Templates_FuncDataTemplate__ctor">FuncDataTemplate Overload</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
