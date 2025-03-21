# Changed Property


Gets an observable that is fired when this property changes on any <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> instance.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IObservable<AvaloniaPropertyChangedEventArgs> Changed { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property Changed As IObservable(Of AvaloniaPropertyChangedEventArgs)
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Changed : IObservable<AvaloniaPropertyChangedEventArgs> with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaProperty.cs#L145" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="T_Avalonia_AvaloniaPropertyChangedEventArgs">AvaloniaPropertyChangedEventArgs</a>)  
An observable that is fired when this property changes on any <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> instance.

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

