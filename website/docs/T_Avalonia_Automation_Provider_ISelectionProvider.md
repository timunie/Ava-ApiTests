import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ISelectionProvider Interface


Exposes methods and properties to support access by a UI Automation client to controls that act as containers for a collection of individual, selectable child items.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ISelectionProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ISelectionProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ISelectionProvider = interface end
```
</TabItem>
</Tabs>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Automation_Provider_ISelectionProvider_CanSelectMultiple">CanSelectMultiple</a></td>
<td>Gets a value that indicates whether the provider allows more than one child element to be selected concurrently.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Provider_ISelectionProvider_IsSelectionRequired">IsSelectionRequired</a></td>
<td>Gets a value that indicates whether the provider requires at least one child element to be selected.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Automation_Provider_ISelectionProvider_GetSelection">GetSelection</a></td>
<td>Retrieves a provider for each child element that is selected.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  
