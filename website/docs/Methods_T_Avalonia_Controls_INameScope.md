# INameScope Methods




## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_INameScope_Complete">Complete()</a></td>
<td>Marks the name scope as completed, no further registrations will be allowed</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_INameScope_Find">Find(String)</a></td>
<td>Finds a named element in the name scope, returns immediately, doesn't traverse the name scope stack</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_INameScope_FindAsync">FindAsync(String)</a></td>
<td>Finds a named element in the name scope, waits for the scope to be completely populated before returning null Returned task is configured to run any continuations synchronously.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_INameScope_Register">Register(String, Object)</a></td>
<td>Registers an element in the name scope.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_NameScopeExtensions_Find__1">Find(T)(String)</a></td>
<td>Finds a named element in an <a href="T_Avalonia_Controls_INameScope">INameScope</a>.<br />(Defined by <a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_NameScopeExtensions_Get__1">Get(T)(String)</a></td>
<td>Gets a named element from an <a href="T_Avalonia_Controls_INameScope">INameScope</a> or throws if no element of the requested name was found.<br />(Defined by <a href="T_Avalonia_Controls_NameScopeExtensions">NameScopeExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_INameScope">INameScope Interface</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

