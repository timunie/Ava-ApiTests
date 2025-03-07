# UntypedBindingExpressionBase Class


Base class for binding expressions which produce untyped values.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core">Avalonia.Data.Core</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class UntypedBindingExpressionBase : BindingExpressionBase, 
	IDisposable, IDescription
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class UntypedBindingExpressionBase
	Inherits BindingExpressionBase
	Implements IDisposable, IDescription
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type UntypedBindingExpressionBase = 
    class
        inherit BindingExpressionBase
        interface IDisposable
        interface IDescription
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/UntypedBindingExpressionBase.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a>  →  UntypedBindingExpressionBase</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Data_TemplateBinding">Avalonia.Data.TemplateBinding</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_IDescription">IDescription</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase__ctor">UntypedBindingExpressionBase(BindingPriority, AvaloniaProperty, Boolean)</a></td>
<td>Initializes a new instance of the UntypedBindingExpressionBase class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_Description">Description</a></td>
<td>Gets a description of the binding expression.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_ErrorType">ErrorType</a></td>
<td>Gets the current error state of the binding expression.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_IsDataValidationEnabled">IsDataValidationEnabled</a></td>
<td>Gets a value indicating whether data validation is enabled for the binding expression.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_IsRunning">IsRunning</a></td>
<td>Gets a value indicating whether the binding expression is currently running.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_Priority">Priority</a></td>
<td>Gets the priority of the binding expression.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_TargetProperty">TargetProperty</a></td>
<td>Gets the <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> which the binding expression is targeting.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_TargetType">TargetType</a></td>
<td>Gets the target type of the binding expression; that is, the type that values produced by the expression should be converted to.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_ConvertBack">ConvertBack(IValueConverter, CultureInfo, Object, Object, Type)</a></td>
<td>Converts a value using a value converter's ConvertBack method, logging a warning if necessary.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Dispose">Dispose()</a></td>
<td>Terminates the binding.<br />(Overrides <a href="M_Avalonia_Data_BindingExpressionBase_Dispose">BindingExpressionBase.Dispose()</a>)</td>
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
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_GetValue">GetValue()</a></td>
<td>Gets the current value of the binding expression.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_GetValueOrDefault">GetValueOrDefault()</a></td>
<td>Gets the current value of the binding expression or the default value for the target property.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Log_1">Log(String, LogEventLevel)</a></td>
<td>Logs a binding error.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Log">Log(AvaloniaObject, String, LogEventLevel)</a></td>
<td>Logs a binding error.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_ShouldLogError">ShouldLogError(AvaloniaObject)</a></td>
<td>Gets a value indicating whether an error should be logged given the current state of the binding expression.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Start">Start()</a></td>
<td>Starts the binding expression following a call to AttachCore(IBindingExpressionSink, ImmediateValueFrame, AvaloniaObject, AvaloniaProperty, BindingPriority).</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Start_1">Start(Boolean)</a></td>
<td>Starts the binding expression by calling <a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_StartCore">StartCore()</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_StartCore">StartCore()</a></td>
<td>When overridden in a derived class, starts the binding expression.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Stop">Stop()</a></td>
<td>Stops the binding expression by calling <a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_StopCore">StopCore()</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_StopCore">StopCore()</a></td>
<td>When overridden in a derived class, stops the binding expression.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_TryGetTarget">TryGetTarget(AvaloniaObject)</a></td>
<td>Tries to retrieve the target for the binding expression.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingExpressionBase_UpdateSource">UpdateSource()</a></td>
<td>Sends the current binding target value to the binding source property in <a href="T_Avalonia_Data_BindingMode">TwoWay</a> or <a href="T_Avalonia_Data_BindingMode">OneWayToSource</a> bindings.<br />(Inherited from <a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingExpressionBase_UpdateTarget">UpdateTarget()</a></td>
<td>Forces a data transfer from the binding source to the binding target.<br />(Inherited from <a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a>)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Data_Core_UntypedBindingExpressionBase_UnchangedValue">UnchangedValue</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data_Core">Avalonia.Data.Core Namespace</a>  
