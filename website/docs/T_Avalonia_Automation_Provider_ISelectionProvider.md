# ISelectionProvider Interface


Exposes methods and properties to support access by a UI Automation client to controls that act as containers for a collection of individual, selectable child items.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Automation/Provider/ISelectionProvider.cs" title="View the source code">View Source</a>



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
<td><a href="M_Avalonia_Automation_Provider_ISelectionProvider_GetSelection">GetSelection()</a></td>
<td>Retrieves a provider for each child element that is selected.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  
