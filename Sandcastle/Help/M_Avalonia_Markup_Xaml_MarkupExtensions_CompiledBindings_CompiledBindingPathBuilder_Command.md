---
title:Command Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Command Method




## Definition
**Namespace:** <a href="N_Avalonia_Markup_Xaml_MarkupExtensions_CompiledBindings">Avalonia.Markup.Xaml.MarkupExtensions.CompiledBindings</a>  
**Assembly:** Avalonia.Markup.Xaml (in Avalonia.Markup.Xaml.dll) Version: 11.2.4

**C#**
``` C#
public CompiledBindingPathBuilder Command(
	string methodName,
	Action<Object, Object?> executeHelper,
	Func<Object, Object?, bool>? canExecuteHelper,
	string[]? dependsOnProperties
)
```
**VB**
``` VB
Public Function Command ( 
	methodName As String,
	executeHelper As Action(Of Object, Object),
	canExecuteHelper As Func(Of Object, Object, Boolean),
	dependsOnProperties As String()
) As CompiledBindingPathBuilder
```
**F#**
``` F#
member Command : 
        methodName : string * 
        executeHelper : Action<Object, Object> * 
        canExecuteHelper : Func<Object, Object, bool> * 
        dependsOnProperties : string[] -> CompiledBindingPathBuilder 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>[]</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Markup_Xaml_MarkupExtensions_CompiledBindings_CompiledBindingPathBuilder">CompiledBindingPathBuilder</a>

## See Also


#### Reference
<a href="T_Avalonia_Markup_Xaml_MarkupExtensions_CompiledBindings_CompiledBindingPathBuilder">CompiledBindingPathBuilder Class</a>  
<a href="N_Avalonia_Markup_Xaml_MarkupExtensions_CompiledBindings">Avalonia.Markup.Xaml.MarkupExtensions.CompiledBindings Namespace</a>  
