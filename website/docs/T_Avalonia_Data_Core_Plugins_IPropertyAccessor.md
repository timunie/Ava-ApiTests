# IPropertyAccessor Interface


Defines an accessor to a property on an object returned by a <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessorPlugin">IPropertyAccessorPlugin</a>



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IPropertyAccessor : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IPropertyAccessor
	Inherits IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IPropertyAccessor = 
    interface
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/IPropertyAccessor.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_Core_Plugins_IPropertyAccessor_PropertyType">PropertyType</a></td>
<td>Gets the type of the property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_Plugins_IPropertyAccessor_Value">Value</a></td>
<td>Gets the current value of the property.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_IPropertyAccessor_SetValue">SetValue(Object, BindingPriority)</a></td>
<td>Sets the property value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_IPropertyAccessor_Subscribe">Subscribe(Action(Object))</a></td>
<td>Subscribes to the value of the member.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_IPropertyAccessor_Unsubscribe">Unsubscribe()</a></td>
<td>Unsubscribes to the value of the member.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  

