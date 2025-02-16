---
title:TemplateBinding Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TemplateBinding Class




## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public class TemplateBinding : UntypedBindingExpressionBase, 
	IBinding, IDescription, ISetterValue, IDisposable, IObserver<Object>, 
	IObservable<Object>
```
**VB**
``` VB
Public Class TemplateBinding
	Inherits UntypedBindingExpressionBase
	Implements IBinding, IDescription, ISetterValue, IDisposable, 
	IObserver(Of Object), IObservable(Of Object)
```
**F#**
``` F#
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

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a>  →  <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>  →  TemplateBinding</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Data_IBinding">IBinding</a>, <a href="T_Avalonia_IDescription">IDescription</a>, <a href="T_Avalonia_Styling_ISetterValue">ISetterValue</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.iobservable-1" target="_blank" rel="noopener noreferrer">IObservable</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>), <a href="https://learn.microsoft.com/dotnet/api/system.iobserver-1" target="_blank" rel="noopener noreferrer">IObserver</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Data_TemplateBinding__ctor">TemplateBinding()</a></td>
<td>Initializes a new instance of the TemplateBinding class</td></tr>
<tr>
<td><a href="M_Avalonia_Data_TemplateBinding__ctor_1">TemplateBinding(AvaloniaProperty)</a></td>
<td>Initializes a new instance of the TemplateBinding class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_TemplateBinding_Converter">Converter</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Data_TemplateBinding_ConverterCulture">ConverterCulture</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Data_TemplateBinding_ConverterParameter">ConverterParameter</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Data_TemplateBinding_Description">Description</a></td>
<td><br />(Overrides <a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_Description">UntypedBindingExpressionBase.Description</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_ErrorType">ErrorType</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_IsDataValidationEnabled">IsDataValidationEnabled</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_IsRunning">IsRunning</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Data_TemplateBinding_Mode">Mode</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_Priority">Priority</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Data_TemplateBinding_Property">Property</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_TargetProperty">TargetProperty</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_TargetType">TargetType</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_ConvertBack">ConvertBack(IValueConverter, CultureInfo, Object, Object, Type)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Dispose">Dispose()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_GetValue">GetValue()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_GetValueOrDefault">GetValueOrDefault()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_TemplateBinding_Initiate">Initiate(AvaloniaObject, AvaloniaProperty, Object, Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Log_1">Log(String, LogEventLevel)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Log">Log(AvaloniaObject, String, LogEventLevel)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_TemplateBinding_ProvideValue">ProvideValue()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_ShouldLogError">ShouldLogError(AvaloniaObject)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Start">Start()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Start_1">Start(Boolean)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_TemplateBinding_StartCore">StartCore()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_StartCore">UntypedBindingExpressionBase.StartCore()</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Stop">Stop()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_TemplateBinding_StopCore">StopCore()</a></td>
<td><br />(Overrides <a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_StopCore">UntypedBindingExpressionBase.StopCore()</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_TemplateBinding_Subscribe">Subscribe(IObserver(Object))</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_TryGetTarget">TryGetTarget(AvaloniaObject)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_BindingExpressionBase_UpdateSource">UpdateSource()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_BindingExpressionBase_UpdateTarget">UpdateTarget()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a>)</td></tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_StreamBindingExtensions_StreamBinding__1">StreamBinding(Object)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_StreamBindingExtensions">StreamBindingExtensions</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_ToBinding__1">ToBinding(Object)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
