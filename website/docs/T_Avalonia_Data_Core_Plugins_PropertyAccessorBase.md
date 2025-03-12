# PropertyAccessorBase Class


Defines a default base implementation for a <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class PropertyAccessorBase : IPropertyAccessor, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class PropertyAccessorBase
	Implements IPropertyAccessor, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type PropertyAccessorBase = 
    class
        interface IPropertyAccessor
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/Plugins/PropertyAccessorBase.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  PropertyAccessorBase</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Data_Core_Plugins_DataValidationBase">Avalonia.Data.Core.Plugins.DataValidationBase</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase__ctor">PropertyAccessorBase()</a></td>
<td>Initializes a new instance of the PropertyAccessorBase class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_Core_Plugins_PropertyAccessorBase_PropertyType">PropertyType</a></td>
<td>Gets the type of the property.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_Plugins_PropertyAccessorBase_Value">Value</a></td>
<td>Gets the current value of the property.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase_Dispose">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase_PublishValue">PublishValue(Object)</a></td>
<td>Publishes a value to the listener.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase_SetValue">SetValue(Object, BindingPriority)</a></td>
<td>Sets the property value.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase_Subscribe">Subscribe(Action(Object))</a></td>
<td>Subscribes to the value of the member.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase_SubscribeCore">SubscribeCore()</a></td>
<td>When overridden in a derived class, begins listening to the member.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase_Unsubscribe">Unsubscribe()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_Plugins_PropertyAccessorBase_UnsubscribeCore">UnsubscribeCore()</a></td>
<td>When overridden in a derived class, stops listening to the member.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data_Core_Plugins">Avalonia.Data.Core.Plugins Namespace</a>  

