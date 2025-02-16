---
title:GetBindingObservable&lt;TResult&gt;(AvaloniaObject, AvaloniaProperty, Func&lt;Object, TResult&gt;) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetBindingObservable&lt;TResult&gt;(AvaloniaObject, AvaloniaProperty, Func&lt;Object, TResult&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IObservable<BindingValue<TResult>> GetBindingObservable<TResult>(
	this AvaloniaObject o,
	AvaloniaProperty property,
	Func<Object?, TResult> converter
)

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function GetBindingObservable(Of TResult) ( 
	o As AvaloniaObject,
	property As AvaloniaProperty,
	converter As Func(Of Object, TResult)
) As IObservable(Of BindingValue(Of TResult))
```
**F#**
``` F#
[<ExtensionAttribute>]
static member GetBindingObservable : 
        o : AvaloniaObject * 
        property : AvaloniaProperty * 
        converter : Func<Object, 'TResult> -> IObservable<BindingValue<'TResult>> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd> </dd><dt>  <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, TResult)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_Data_BindingValue_1">BindingValue</a>(TResult))

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions Class</a>  
<a href="Overload_Avalonia_AvaloniaObjectExtensions_GetBindingObservable">GetBindingObservable Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
