import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Grid Fields




## Fields
<table>
<tr>
<td><a href="F_Avalonia_Controls_Grid_ColumnProperty">ColumnProperty</a></td>
<td>Column property. This is an attached property. Grid defines Column property, so that it can be set on any element treated as a cell. Column property specifies child's position with respect to columns.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Grid_ColumnSpanProperty">ColumnSpanProperty</a></td>
<td>ColumnSpan property. This is an attached property. Grid defines ColumnSpan, so that it can be set on any element treated as a cell. ColumnSpan property specifies child's width with respect to columns. Example, ColumnSpan == 2 means that child will span across two columns.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Grid_IsSharedSizeScopeProperty">IsSharedSizeScopeProperty</a></td>
<td>IsSharedSizeScope property marks scoping element for shared size.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Grid_RowProperty">RowProperty</a></td>
<td>Row property. This is an attached property. Grid defines Row, so that it can be set on any element treated as a cell. Row property specifies child's position with respect to rows. <p>Rows are 0 - based. In order to appear in first row, element should have Row property set to <code>0</code>.</p><p>Default value for the property is <code>0</code>.</p></td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Grid_RowSpanProperty">RowSpanProperty</a></td>
<td>RowSpan property. This is an attached property. Grid defines RowSpan, so that it can be set on any element treated as a cell. RowSpan property specifies child's height with respect to row grid lines. Example, RowSpan == 3 means that child will span across three rows.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Controls_Grid_ShowGridLinesProperty">ShowGridLinesProperty</a></td>
<td>ShowGridLines property. This property is used mostly for simplification of visual debugging. When it is set to <code>true</code> grid lines are drawn to visualize location of grid lines.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Grid">Grid Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
