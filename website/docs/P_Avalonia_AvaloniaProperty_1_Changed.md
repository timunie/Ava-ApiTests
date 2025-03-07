# Changed Property


Gets an observable that is fired when this property changes on any <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> instance.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IObservable<AvaloniaPropertyChangedEventArgs<TValue>> Changed \{ get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property Changed As IObservable(Of AvaloniaPropertyChangedEventArgs(Of TValue))
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Changed : IObservable<AvaloniaPropertyChangedEventArgs<'TValue>> with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaProperty%601.cs#L60" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs_1">AvaloniaPropertyChangedEventArgs</a>(<a href="T_Avalonia_AvaloniaProperty_1">TValue</a>))  
An observable that is fired when this property changes on any <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> instance.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaProperty_1">AvaloniaProperty(TValue) Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
