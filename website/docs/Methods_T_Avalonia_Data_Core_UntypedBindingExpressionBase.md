# UntypedBindingExpressionBase Methods




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

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase Class</a>  
<a href="N_Avalonia_Data_Core">Avalonia.Data.Core Namespace</a>  
