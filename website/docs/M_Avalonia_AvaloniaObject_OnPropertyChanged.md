# OnPropertyChanged Method


Called when a avalonia property changes on the object.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnPropertyChanged(
	AvaloniaPropertyChangedEventArgs change
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnPropertyChanged ( 
	change As AvaloniaPropertyChangedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnPropertyChanged : 
        change : AvaloniaPropertyChangedEventArgs -> unit 
override OnPropertyChanged : 
        change : AvaloniaPropertyChangedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/AvaloniaObject.cs#L736" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_AvaloniaPropertyChangedEventArgs">AvaloniaPropertyChangedEventArgs</a></dt><dd>The property change details.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaObject">AvaloniaObject Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

