# IValueProvider Interface


Exposes methods and properties to support access by a UI Automation client to controls that have an intrinsic value that does not span a range and that can be represented as a string.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Automation/Provider/IValueProvider.cs" title="View the source code">View Source</a>



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
<td><a href="M_Avalonia_Automation_Provider_IValueProvider_SetValue">SetValue(String)</a></td>
<td>Sets the value of a control.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  

