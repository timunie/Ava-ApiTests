---
title:AddClassHandler&lt;TTarget, TValue&gt;(IObservable&lt;AvaloniaPropertyChangedEventArgs&lt;TValue&gt;&gt;, Action&lt;TTarget, AvaloniaPropertyChangedEventArgs&lt;TValue&gt;&gt;) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AddClassHandler&lt;TTarget, TValue&gt;(IObservable&lt;AvaloniaPropertyChangedEventArgs&lt;TValue&gt;&gt;, Action&lt;TTarget, AvaloniaPropertyChangedEventArgs&lt;TValue&gt;&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IDisposable AddClassHandler<TTarget, TValue>(
	this IObservable<AvaloniaPropertyChangedEventArgs<TValue>> observable,
	Action<TTarget, AvaloniaPropertyChangedEventArgs<TValue>> action
)
where TTarget : AvaloniaObject

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function AddClassHandler(Of TTarget As AvaloniaObject, TValue) ( 
	observable As IObservable(Of AvaloniaPropertyChangedEventArgs(Of TValue)),
	action As Action(Of TTarget, AvaloniaPropertyChangedEventArgs(Of TValue))
) As IDisposable
```
**F#**
``` F#
[<ExtensionAttribute>]
static member AddClassHandler : 
        observable : IObservable<AvaloniaPropertyChangedEventArgs<'TValue>> * 
        action : Action<'TTarget, AvaloniaPropertyChangedEventArgs<'TValue>> -> IDisposable  when 'TTarget : AvaloniaObject
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">AvaloniaPropertyChangedEventArgs</a>(TValue))</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(TTarget, <a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">AvaloniaPropertyChangedEventArgs</a>(TValue))</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">AvaloniaPropertyChangedEventArgs</a>(TValue)). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions Class</a>  
<a href="Overload_Avalonia_AvaloniaObjectExtensions_AddClassHandler">AddClassHandler Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
