# OnPropertyChanged Method


Called when a property changes on the object.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnPropertyChanged(
	PropertyChangedEventArgs args
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnPropertyChanged ( 
	args As PropertyChangedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnPropertyChanged : 
        args : PropertyChangedEventArgs -> unit 
override OnPropertyChanged : 
        args : PropertyChangedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/RendererDiagnostics.cs#L55" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventargs" target="_blank" rel="noopener noreferrer">PropertyChangedEventArgs</a></dt><dd>The property change details.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Rendering_RendererDiagnostics">RendererDiagnostics Class</a>  
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
