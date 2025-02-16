---
title:GetResourceObservable(IResourceProvider, Object, ThemeVariant, Func&lt;Object, Object&gt;) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetResourceObservable(IResourceProvider, Object, ThemeVariant, Func&lt;Object, Object&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IObservable<Object?> GetResourceObservable(
	this IResourceProvider resourceProvider,
	Object key,
	ThemeVariant? defaultThemeVariant,
	Func<Object?, Object?>? converter = null
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function GetResourceObservable ( 
	resourceProvider As IResourceProvider,
	key As Object,
	defaultThemeVariant As ThemeVariant,
	Optional converter As Func(Of Object, Object) = Nothing
) As IObservable(Of Object)
```
**F#**
``` F#
[<ExtensionAttribute>]
static member GetResourceObservable : 
        resourceProvider : IResourceProvider * 
        key : Object * 
        defaultThemeVariant : ThemeVariant * 
        ?converter : Func<Object, Object> 
(* Defaults:
        let _converter = defaultArg converter null
*)
-> IObservable<Object> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_IResourceProvider">IResourceProvider</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Styling_ThemeVariant">ThemeVariant</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Controls_IResourceProvider">IResourceProvider</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions Class</a>  
<a href="Overload_Avalonia_Controls_ResourceNodeExtensions_GetResourceObservable">GetResourceObservable Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
