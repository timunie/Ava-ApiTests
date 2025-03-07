# IsLoaded Property


Gets a value indicating whether the control is fully constructed in the visual tree and both layout and render are complete.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool IsLoaded \{ get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property IsLoaded As Boolean
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member IsLoaded : bool with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Control.cs#L154" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>This is set to true while raising the <a href="E_Avalonia_Controls_Control_Loaded">Loaded</a> event.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Control">Control Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
