---
title:TryFindResource(IResourceHost, Object, Object) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TryFindResource(IResourceHost, Object, Object) Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static bool TryFindResource(
	this IResourceHost control,
	Object key,
	out Object?? value
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function TryFindResource ( 
	control As IResourceHost,
	key As Object,
	<OutAttribute> ByRef value As Object
) As Boolean
```
**F#**
``` F#
[<ExtensionAttribute>]
static member TryFindResource : 
        control : IResourceHost * 
        key : Object * 
        value : Object byref -> bool 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_IResourceHost">IResourceHost</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Controls_IResourceHost">IResourceHost</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions Class</a>  
<a href="Overload_Avalonia_Controls_ResourceNodeExtensions_TryFindResource">TryFindResource Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
