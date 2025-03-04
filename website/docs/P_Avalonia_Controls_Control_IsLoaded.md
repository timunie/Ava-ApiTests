import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# IsLoaded Property


Gets a value indicating whether the control is fully constructed in the visual tree and both layout and render are complete.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool IsLoaded { get; }
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Control.cs#L154" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## 
This is set to true while raising the <a href="E_Avalonia_Controls_Control_Loaded">Loaded</a> event.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Control">Control Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
