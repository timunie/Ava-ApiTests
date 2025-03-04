import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ItemsSelector Method


Selects the child items of an item.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
InstancedBinding? ItemsSelector(
	Object item
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function ItemsSelector ( 
	item As Object
) As InstancedBinding
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ItemsSelector : 
        item : Object -> InstancedBinding 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Templates/ITreeDataTemplate.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The item.</dd></dl>

#### Return Value
InstancedBinding  
An InstancedBinding holding the items, or an observable that tracks the items. May return null if no child items.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_ITreeDataTemplate">ITreeDataTemplate Interface</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
