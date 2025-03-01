import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# IValueProvider Interface


Exposes methods and properties to support access by a UI Automation client to controls that have an intrinsic value that does not span a range and that can be represented as a string.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IValueProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IValueProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IValueProvider = interface end
```
</TabItem>
</Tabs>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IValueProvider_IsReadOnly">IsReadOnly</a></td>
<td>Gets a value that indicates whether the value of a control is read-only.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IValueProvider_Value">Value</a></td>
<td>Gets the value of the control.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Automation_Provider_IValueProvider_SetValue">SetValue</a></td>
<td>Sets the value of a control.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  
