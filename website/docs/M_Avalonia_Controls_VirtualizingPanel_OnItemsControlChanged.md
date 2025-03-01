import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OnItemsControlChanged Method


Called when the <a href="P_Avalonia_Controls_VirtualizingPanel_ItemsControl">ItemsControl</a> that owns the panel changes.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void OnItemsControlChanged(
	ItemsControl? oldValue
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub OnItemsControlChanged ( 
	oldValue As ItemsControl
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract OnItemsControlChanged : 
        oldValue : ItemsControl -> unit 
override OnItemsControlChanged : 
        oldValue : ItemsControl -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a></dt><dd>The old value of the <a href="P_Avalonia_Controls_VirtualizingPanel_ItemsControl">ItemsControl</a> property.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_VirtualizingPanel">VirtualizingPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
