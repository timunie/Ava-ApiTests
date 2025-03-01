import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ClearItemContainer Method


Undoes the effects of the <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_PrepareItemContainer">PrepareItemContainer(Control, Object, Int32)</a> method.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void ClearItemContainer(
	Control container
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub ClearItemContainer ( 
	container As Control
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ClearItemContainer : 
        container : Control -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd>The container control.</dd></dl>This method must be called when a container is unrealized. The container must have already have been removed from the virtualizing panel's list of realized containers before this method is called. This method must not be called if <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_NeedsContainer">NeedsContainer(Object, Int32, Object)</a> returned false for the item.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Generators_ItemContainerGenerator">ItemContainerGenerator Class</a>  
<a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators Namespace</a>  
