# IRangeValueProvider Interface


Exposes methods and properties to support access by a UI Automation client to controls that can be set to a value within a range.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IRangeValueProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IRangeValueProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IRangeValueProvider = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Automation/Provider/IRangeValueProvider.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IRangeValueProvider_IsReadOnly">IsReadOnly</a></td>
<td>Gets a value that indicates whether the value of a control is read-only.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IRangeValueProvider_LargeChange">LargeChange</a></td>
<td>Gets the value that is added to or subtracted from the Value property when a large change is made, such as with the PAGE DOWN key.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IRangeValueProvider_Maximum">Maximum</a></td>
<td>Gets the maximum range value that is supported by the control.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IRangeValueProvider_Minimum">Minimum</a></td>
<td>Gets the minimum range value that is supported by the control.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IRangeValueProvider_SmallChange">SmallChange</a></td>
<td>Gets the value that is added to or subtracted from the Value property when a small change is made, such as with an arrow key.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Automation_Provider_IRangeValueProvider_Value">Value</a></td>
<td>Gets the value of the control.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Automation_Provider_IRangeValueProvider_SetValue">SetValue(Double)</a></td>
<td>Sets the value of the control.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  

