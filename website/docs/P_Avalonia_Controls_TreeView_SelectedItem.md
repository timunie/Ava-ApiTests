import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SelectedItem Property


Gets or sets the selected item.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Object? SelectedItem { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property SelectedItem As Object
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SelectedItem : Object with get, set
```
</TabItem>
</Tabs>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>Note that setting this property only currently works if the item is expanded to be visible. To select non-expanded nodes use `Selection.SelectedIndex`.

## See Also


#### Reference
<a href="T_Avalonia_Controls_TreeView">TreeView Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
