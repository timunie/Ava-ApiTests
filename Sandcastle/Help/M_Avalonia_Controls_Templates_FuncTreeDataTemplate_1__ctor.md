---
title:FuncTreeDataTemplate&lt;T&gt;(Func&lt;T, Boolean&gt;, Func&lt;T, INameScope, Control&gt;, Func&lt;T, IEnumerable&gt;) Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# FuncTreeDataTemplate&lt;T&gt;(Func&lt;T, Boolean&gt;, Func&lt;T, INameScope, Control&gt;, Func&lt;T, IEnumerable&gt;) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate_1">FuncTreeDataTemplate(T)</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public FuncTreeDataTemplate(
	Func<T, bool> match,
	Func<T, INameScope, Control> build,
	Func<T, IEnumerable> itemsSelector
)
```
**VB**
``` VB
Public Sub New ( 
	match As Func(Of T, Boolean),
	build As Func(Of T, INameScope, Control),
	itemsSelector As Func(Of T, IEnumerable)
)
```
**F#**
``` F#
new : 
        match : Func<'T, bool> * 
        build : Func<'T, INameScope, Control> * 
        itemsSelector : Func<'T, IEnumerable> -> FuncTreeDataTemplate
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate_1">T</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate_1">T</a>, <a href="T_Avalonia_Controls_INameScope">INameScope</a>, <a href="T_Avalonia_Controls_Control">Control</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate_1">T</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate_1">FuncTreeDataTemplate(T) Class</a>  
<a href="Overload_Avalonia_Controls_Templates_FuncTreeDataTemplate_1__ctor">FuncTreeDataTemplate(T) Overload</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
