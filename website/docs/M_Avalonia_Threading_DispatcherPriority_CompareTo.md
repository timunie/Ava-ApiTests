# CompareTo Method


Compares the current instance with another object of the same type and returns an integer that indicates whether the current instance precedes, follows, or occurs in the same position in the sort order as the other object.



## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public int CompareTo(
	DispatcherPriority other
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function CompareTo ( 
	other As DispatcherPriority
) As Integer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CompareTo : 
        other : DispatcherPriority -> int 
override CompareTo : 
        other : DispatcherPriority -> int 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Threading/DispatcherPriority.cs#L168" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority</a></dt><dd>An object to compare with this instance.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  
A value that indicates the relative order of the objects being compared. The return value has these meanings: <ul>ValueMeaningLess than zeroThis instance precedes <em>other</em> in the sort order.ZeroThis instance occurs in the same position in the sort order as <em>other</em>.Greater than zeroThis instance follows <em>other</em> in the sort order.</ul>

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.icomparable-1.compareto" target="_blank" rel="noopener noreferrer">IComparable(T).CompareTo(T)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Threading_DispatcherPriority">DispatcherPriority Structure</a>  
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
