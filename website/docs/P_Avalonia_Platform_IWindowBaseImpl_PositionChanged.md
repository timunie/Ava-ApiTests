import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# PositionChanged Property


Gets or sets a method called when the window's position changes.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Action<PixelPoint>? PositionChanged { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Property PositionChanged As Action(Of PixelPoint)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract PositionChanged : Action<PixelPoint> with get, set
```
</TabItem>
</Tabs>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(PixelPoint)

## See Also


#### Reference
<a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
