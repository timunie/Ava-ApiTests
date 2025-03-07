# TemplateBinding Class


A XAML binding to a property on a control's templated parent.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class TemplateBinding : UntypedBindingExpressionBase, 
	IBinding, IDescription, ISetterValue, IDisposable, IObserver<Object>, 
	IObservable<Object>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class TemplateBinding
	Inherits UntypedBindingExpressionBase
	Implements IBinding, IDescription, ISetterValue, IDisposable, 
	IObserver(Of Object), IObservable(Of Object)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type TemplateBinding = 
    class
        inherit UntypedBindingExpressionBase
        interface IBinding
        interface IDescription
        interface ISetterValue
        interface IDisposable
        interface IObserver<Object>
        interface IObservable<Object>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/TemplateBinding.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a>  →  <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>  →  TemplateBinding</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Data_IBinding">IBinding</a>, <a href="T_Avalonia_IDescription">IDescription</a>, <a href="T_Avalonia_Styling_ISetterValue">ISetterValue</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>), <a href="https://learn.microsoft.com/dotnet/api/system.iobserver-1" target="_blank" rel="noopener noreferrer">IObserver</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Data_TemplateBinding__ctor">TemplateBinding()</a></td>
<td>Initializes a new instance of the TemplateBinding class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_TemplateBinding__ctor_1">TemplateBinding(AvaloniaProperty)</a></td>
<td>Initializes a new instance of the TemplateBinding class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_TemplateBinding_Converter">Converter</a></td>
<td>Gets or sets the <a href="T_Avalonia_Data_Converters_IValueConverter">IValueConverter</a> to use.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_TemplateBinding_ConverterCulture">ConverterCulture</a></td>
<td>Gets or sets the culture in which to evaluate the converter.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_TemplateBinding_ConverterParameter">ConverterParameter</a></td>
<td>Gets or sets a parameter to pass to <a href="P_Avalonia_Data_TemplateBinding_Converter">Converter</a>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_TemplateBinding_Description">Description</a></td>
<td>Gets a description of the binding expression.<br />(Overrides <a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_Description">UntypedBindingExpressionBase.Description</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_ErrorType">ErrorType</a></td>
<td>Gets the current error state of the binding expression.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_IsDataValidationEnabled">IsDataValidationEnabled</a></td>
<td>Gets a value indicating whether data validation is enabled for the binding expression.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_IsRunning">IsRunning</a></td>
<td>Gets a value indicating whether the binding expression is currently running.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_TemplateBinding_Mode">Mode</a></td>
<td>Gets or sets the binding mode.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_Priority">Priority</a></td>
<td>Gets the priority of the binding expression.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_TemplateBinding_Property">Property</a></td>
<td>Gets or sets the name of the source property on the templated parent.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_TargetProperty">TargetProperty</a></td>
<td>Gets the <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> which the binding expression is targeting.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_TargetType">TargetType</a></td>
<td>Gets the target type of the binding expression; that is, the type that values produced by the expression should be converted to.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_ConvertBack">ConvertBack(IValueConverter, CultureInfo, Object, Object, Type)</a></td>
<td>Converts a value using a value converter's ConvertBack method, logging a warning if necessary.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Dispose">Dispose()</a></td>
<td>Terminates the binding.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
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
<td>Gets the current value of the binding expression.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_GetValueOrDefault">GetValueOrDefault()</a></td>
<td>Gets the current value of the binding expression or the default value for the target property.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_TemplateBinding_Initiate">Initiate(AvaloniaObject, AvaloniaProperty, Object, Boolean)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Log_1">Log(String, LogEventLevel)</a></td>
<td>Logs a binding error.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Log">Log(AvaloniaObject, String, LogEventLevel)</a></td>
<td>Logs a binding error.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_TemplateBinding_ProvideValue">ProvideValue()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_ShouldLogError">ShouldLogError(AvaloniaObject)</a></td>
<td>Gets a value indicating whether an error should be logged given the current state of the binding expression.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Start">Start()</a></td>
<td>Starts the binding expression following a call to AttachCore(IBindingExpressionSink, ImmediateValueFrame, AvaloniaObject, AvaloniaProperty, BindingPriority).<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Start_1">Start(Boolean)</a></td>
<td>Starts the binding expression by calling <a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_StartCore">StartCore()</a>.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_TemplateBinding_StartCore">StartCore()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_StartCore">UntypedBindingExpressionBase.StartCore()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Stop">Stop()</a></td>
<td>Stops the binding expression by calling <a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_StopCore">StopCore()</a>.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_TemplateBinding_StopCore">StopCore()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_StopCore">UntypedBindingExpressionBase.StopCore()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_TemplateBinding_Subscribe">Subscribe(IObserver(Object))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_TryGetTarget">TryGetTarget(AvaloniaObject)</a></td>
<td>Tries to retrieve the target for the binding expression.<br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td>
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

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_StreamBindingExtensions_StreamBinding__1">StreamBinding(Object)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_StreamBindingExtensions">StreamBindingExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_ToBinding__1">ToBinding(Object)()</a></td>
<td>Converts an <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable(T)</a> to an <a href="T_Avalonia_Data_IBinding">IBinding</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
