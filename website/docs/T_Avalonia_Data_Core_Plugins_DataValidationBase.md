# DataValidationBase Class


Base class for data validators.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class DataValidationBase : PropertyAccessorBase, 
	IObserver<Object>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class DataValidationBase
	Inherits PropertyAccessorBase
	Implements IObserver(Of Object)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type DataValidationBase = 
    class
        inherit PropertyAccessorBase
        interface IObserver<Object>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/DataValidationBase.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Data_Core_Plugins_PropertyAccessorBase">PropertyAccessorBase</a>  →  DataValidationBase</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iobserver-1" target="_blank" rel="noopener noreferrer">IObserver</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
</table>

Data validators are <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a>s that are returned from an <a href="T_Avalonia_Data_Core_Plugins_IDataValidationPlugin">IDataValidationPlugin</a>. They wrap an inner <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a> and convert any values received from the inner property accessor into <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a>s.

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_DataValidationBase__ctor">DataValidationBase(IPropertyAccessor)</a></td>
<td>Initializes a new instance of the DataValidationBase class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_Core_Plugins_DataValidationBase_PropertyType">PropertyType</a></td>
<td>Gets the type of the property.<br />(Overrides <a href="P_Avalonia_Data_Core_Plugins_PropertyAccessorBase_PropertyType">PropertyAccessorBase.PropertyType</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_Plugins_DataValidationBase_Value">Value</a></td>
<td>Gets the current value of the property.<br />(Overrides <a href="P_Avalonia_Data_Core_Plugins_PropertyAccessorBase_Value">PropertyAccessorBase.Value</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase_Dispose">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="T_Avalonia_Data_Core_Plugins_PropertyAccessorBase">PropertyAccessorBase</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_DataValidationBase_InnerValueChanged">InnerValueChanged(Object)</a></td>
<td>Called when the inner <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a> notifies with a new value.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase_PublishValue">PublishValue(Object)</a></td>
<td>Publishes a value to the listener.<br />(Inherited from <a href="T_Avalonia_Data_Core_Plugins_PropertyAccessorBase">PropertyAccessorBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_DataValidationBase_SetValue">SetValue(Object, BindingPriority)</a></td>
<td>Sets the property value.<br />(Overrides <a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase_SetValue">PropertyAccessorBase.SetValue(Object, BindingPriority)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase_Subscribe">Subscribe(Action(Object))</a></td>
<td>Subscribes to the value of the member.<br />(Inherited from <a href="T_Avalonia_Data_Core_Plugins_PropertyAccessorBase">PropertyAccessorBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_DataValidationBase_SubscribeCore">SubscribeCore()</a></td>
<td>Begins listening to the inner <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a>.<br />(Overrides <a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase_SubscribeCore">PropertyAccessorBase.SubscribeCore()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase_Unsubscribe">Unsubscribe()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_Plugins_PropertyAccessorBase">PropertyAccessorBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_DataValidationBase_UnsubscribeCore">UnsubscribeCore()</a></td>
<td>When overridden in a derived class, stops listening to the member.<br />(Overrides <a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase_UnsubscribeCore">PropertyAccessorBase.UnsubscribeCore()</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  
