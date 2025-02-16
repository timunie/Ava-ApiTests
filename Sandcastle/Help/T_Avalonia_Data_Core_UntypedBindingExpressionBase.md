---
title:UntypedBindingExpressionBase Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# UntypedBindingExpressionBase Class




## Definition
**Namespace:** <a href="N_Avalonia_Data_Core">Avalonia.Data.Core</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public abstract class UntypedBindingExpressionBase : BindingExpressionBase, 
	IDisposable, IDescription
```
**VB**
``` VB
Public MustInherit Class UntypedBindingExpressionBase
	Inherits BindingExpressionBase
	Implements IDisposable, IDescription
```
**F#**
``` F#
[<AbstractClassAttribute>]
type UntypedBindingExpressionBase = 
    class
        inherit BindingExpressionBase
        interface IDisposable
        interface IDescription
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a>  →  UntypedBindingExpressionBase</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Data_TemplateBinding">Avalonia.Data.TemplateBinding</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_IDescription">IDescription</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase__ctor">UntypedBindingExpressionBase(BindingPriority, AvaloniaProperty, Boolean)</a></td>
<td>Initializes a new instance of the UntypedBindingExpressionBase class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_Description">Description</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_ErrorType">ErrorType</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_IsDataValidationEnabled">IsDataValidationEnabled</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_IsRunning">IsRunning</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_Priority">Priority</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_TargetProperty">TargetProperty</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Data_Core_UntypedBindingExpressionBase_TargetType">TargetType</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_ConvertBack">ConvertBack(IValueConverter, CultureInfo, Object, Object, Type)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Dispose">Dispose()</a></td>
<td>Releases all resources used by the UntypedBindingExpressionBase<br />(Overrides <a href="M_Avalonia_Data_BindingExpressionBase_Dispose">BindingExpressionBase.Dispose()</a>)</td></tr>
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
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_GetValueOrDefault">GetValueOrDefault()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Log_1">Log(String, LogEventLevel)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Log">Log(AvaloniaObject, String, LogEventLevel)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_ShouldLogError">ShouldLogError(AvaloniaObject)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Start">Start()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Start_1">Start(Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_StartCore">StartCore()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_Stop">Stop()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_StopCore">StopCore()</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_Core_UntypedBindingExpressionBase_TryGetTarget">TryGetTarget(AvaloniaObject)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Data_BindingExpressionBase_UpdateSource">UpdateSource()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Data_BindingExpressionBase_UpdateTarget">UpdateTarget()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Data_BindingExpressionBase">BindingExpressionBase</a>)</td></tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Data_Core_UntypedBindingExpressionBase_UnchangedValue">UnchangedValue</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data_Core">Avalonia.Data.Core Namespace</a>  
