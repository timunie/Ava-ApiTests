---
title:AddClassHandler&lt;TTarget&gt;(IObservable&lt;AvaloniaPropertyChangedEventArgs&gt;, Action&lt;TTarget, AvaloniaPropertyChangedEventArgs&gt;) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# AddClassHandler&lt;TTarget&gt;(IObservable&lt;AvaloniaPropertyChangedEventArgs&gt;, Action&lt;TTarget, AvaloniaPropertyChangedEventArgs&gt;) Method




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static IDisposable AddClassHandler<TTarget>(
	this IObservable<AvaloniaPropertyChangedEventArgs> observable,
	Action<TTarget, AvaloniaPropertyChangedEventArgs> action
)
where TTarget : AvaloniaObject

```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function AddClassHandler(Of TTarget As AvaloniaObject) ( 
	observable As IObservable(Of AvaloniaPropertyChangedEventArgs),
	action As Action(Of TTarget, AvaloniaPropertyChangedEventArgs)
) As IDisposable
```
**F#**
``` F#
[<ExtensionAttribute>]
static member AddClassHandler : 
        observable : IObservable<AvaloniaPropertyChangedEventArgs> * 
        action : Action<'TTarget, AvaloniaPropertyChangedEventArgs> -> IDisposable  when 'TTarget : AvaloniaObject
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs">AvaloniaPropertyChangedEventArgs</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(TTarget, <a href="T_Avalonia_AvaloniaPropertyChangedEventArgs">AvaloniaPropertyChangedEventArgs</a>)</dt><dd> </dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs">AvaloniaPropertyChangedEventArgs</a>). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions Class</a>  
<a href="Overload_Avalonia_AvaloniaObjectExtensions_AddClassHandler">AddClassHandler Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
