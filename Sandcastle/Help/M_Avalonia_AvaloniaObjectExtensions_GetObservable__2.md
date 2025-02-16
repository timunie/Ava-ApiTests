---
title:GetObservable&lt;TSource, TResult&gt;(AvaloniaObject, AvaloniaProperty&lt;TSource&gt;, Func&lt;TSource, TResult&gt;) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GetObservable&lt;TSource, TResult&gt;(AvaloniaObject, AvaloniaProperty&lt;TSource&gt;, Func&lt;TSource, TResult&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IObservable<TResult> GetObservable<TSource, TResult>(
	this AvaloniaObject o,
	AvaloniaProperty<TSource> property,
	Func<TSource, TResult> converter
)

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function GetObservable(Of TSource, TResult) ( 
	o As AvaloniaObject,
	property As AvaloniaProperty(Of TSource),
	converter As Func(Of TSource, TResult)
) As IObservable(Of TResult)
```
**F#**
``` F#
[<ExtensionAttribute>]
static member GetObservable : 
        o : AvaloniaObject * 
        property : AvaloniaProperty<'TSource> * 
        converter : Func<'TSource, 'TResult> -> IObservable<'TResult> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a></dt><dd> </dd><dt>  <a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty</a>(TSource)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(TSource, TResult)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(TResult)

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions Class</a>  
<a href="Overload_Avalonia_AvaloniaObjectExtensions_GetObservable">GetObservable Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
