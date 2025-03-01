import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Bounds Property


Gets the overall pixel-size and position of the screen.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public PixelRect Bounds { get; protected set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property Bounds As PixelRect
	Get
	Protected Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Bounds : PixelRect with get, set
```
</TabItem>
</Tabs>



#### Property Value
PixelRectThis generally is the raw pixel counts in both the X and Y direction.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Screen">Screen Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
