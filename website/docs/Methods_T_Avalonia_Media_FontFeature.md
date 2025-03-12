# FontFeature Methods




## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="M_Avalonia_Media_FontFeature_Parse">Parse(String)</a></td>
<td>Parses a string to return a <a href="T_Avalonia_Media_FontFeature">FontFeature</a>. Syntax is the following: Syntax Value Start End Setting value: kern 1 0 ∞ Turn feature on +kern 1 0 ∞ Turn feature on -kern 0 0 ∞ Turn feature off kern=0 0 0 ∞ Turn feature off kern=1 1 0 ∞ Turn feature on aalt=2 2 0 ∞ Choose 2nd alternate Setting index: kern[] 1 0 ∞ Turn feature on kern[:] 1 0 ∞ Turn feature on kern[5:] 1 5 ∞ Turn feature on, partial kern[:5] 1 0 5 Turn feature on, partial kern[3:5] 1 3 5 Turn feature on, range kern[3] 1 3 3+1 Turn feature on, single char Mixing it all: aalt[3:5]=2 2 3 5 Turn 2nd alternate on for range</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FontFeature_ToString">ToString()</a></td>
<td>Gets a string representation of the <a href="T_Avalonia_Media_FontFeature">FontFeature</a>.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">Object.ToString()</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Media_FontFeature">FontFeature Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

