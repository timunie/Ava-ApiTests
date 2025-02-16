---
title:Bind(AvaloniaObject, AvaloniaProperty, IBinding, Object) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Bind(AvaloniaObject, AvaloniaProperty, IBinding, Object) Method
<blockquote><strong>Note: This API is now obsolete.</strong></blockquote>




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[ObsoleteAttribute("Use AvaloniaObject.Bind(AvaloniaProperty, IBinding")]
public static IDisposable Bind(
	this AvaloniaObject target,
	AvaloniaProperty property,
	IBinding binding,
	Object? anchor = null
)
```
**VB**
``` VB
<ExtensionAttribute>
<ObsoleteAttribute("Use AvaloniaObject.Bind(AvaloniaProperty, IBinding")>
Public Shared Function Bind ( 
	target As AvaloniaObject,
	property As AvaloniaProperty,
	binding As IBinding,
	Optional anchor As Object = Nothing
) As IDisposable
```
**F#**
``` F#
[<ExtensionAttribute>]
[<ObsoleteAttribute("Use AvaloniaObject.Bind(AvaloniaProperty, IBinding")>]
static member Bind : 
        target : AvaloniaObject * 
        property : AvaloniaProperty * 
        binding : IBinding * 
        ?anchor : Object 
(* Defaults:
        let _anchor = defaultArg anchor null
*)
-> IDisposable 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd> </dd><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Data_IBinding">IBinding</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions Class</a>  
<a href="Overload_Avalonia_AvaloniaObjectExtensions_Bind">Bind Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
