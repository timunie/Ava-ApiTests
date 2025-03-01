import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# HostedVisualTreeRoot Property


Gets the root of the visual tree in the case where the popup is presented using a separate visual tree.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Visual? HostedVisualTreeRoot { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property HostedVisualTreeRoot As Visual
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract HostedVisualTreeRoot : Visual with get
override HostedVisualTreeRoot : Visual with get
```
</TabItem>
</Tabs>



#### Property Value
Visual

#### Implements
<a href="P_Avalonia_Controls_Primitives_IPopupHost_HostedVisualTreeRoot">IPopupHost.HostedVisualTreeRoot</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_OverlayPopupHost">OverlayPopupHost Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
