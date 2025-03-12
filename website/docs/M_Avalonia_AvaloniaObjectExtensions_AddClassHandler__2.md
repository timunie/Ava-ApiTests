# AddClassHandler&lt;TTarget, TValue&gt;(IObservable&lt;AvaloniaPropertyChangedEventArgs&lt;TValue&gt;&gt;, Action&lt;TTarget, AvaloniaPropertyChangedEventArgs&lt;TValue&gt;&gt;) Method


Subscribes to a property changed notifications for changes that originate from a *TTarget*.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IDisposable AddClassHandler<TTarget, TValue>(
	this IObservable<AvaloniaPropertyChangedEventArgs<TValue>> observable,
	Action<TTarget, AvaloniaPropertyChangedEventArgs<TValue>> action
)
where TTarget : AvaloniaObject

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ExtensionAttribute>
Public Shared Function AddClassHandler(Of TTarget As AvaloniaObject, TValue) ( 
	observable As IObservable(Of AvaloniaPropertyChangedEventArgs(Of TValue)),
	action As Action(Of TTarget, AvaloniaPropertyChangedEventArgs(Of TValue))
) As IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ExtensionAttribute>]
static member AddClassHandler : 
        observable : IObservable<AvaloniaPropertyChangedEventArgs<'TValue>> * 
        action : Action<'TTarget, AvaloniaPropertyChangedEventArgs<'TValue>> -> IDisposable  when 'TTarget : AvaloniaObject
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObjectExtensions.cs#L356" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">AvaloniaPropertyChangedEventArgs</a>(TValue))</dt><dd>The property changed observable.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.action-2" target="_blank" rel="noopener noreferrer">Action</a>(TTarget, <a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">AvaloniaPropertyChangedEventArgs</a>(TValue))</dt><dd>The method to call. The parameters are the sender and the event args.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The type of the property change sender.</dd><dt /><dd>The type of the property.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>  
A disposable that can be used to terminate the subscription.

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">AvaloniaPropertyChangedEventArgs</a>(TValue)). When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions Class</a>  
<a href="Overload_Avalonia_AvaloniaObjectExtensions_AddClassHandler">AddClassHandler Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

